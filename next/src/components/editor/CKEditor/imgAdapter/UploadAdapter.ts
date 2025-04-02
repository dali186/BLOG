import { Editor } from 'ckeditor5';

class UploadAdapter {
    private loader: any;

    constructor(loader: any) {
        this.loader = loader;
    }

    upload(): Promise<{ default: string }> {
        return this.loader.file.then((file: File) =>
            new Promise((resolve, reject) => {
                this._uploadFile(file, resolve, reject);
            })
        );
    }

    private async _uploadFile(
        file: File,
        resolve: (value: { default: string }) => void,
        reject: (reason?: any) => void
    ): Promise<void> {
        const formData = new FormData();
        formData.append('upload', file);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_IMG_UPLOAD_URL as string, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file');
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message || 'Unknown error');
            }

            resolve({ default: data.url });
        } catch (error: any) {
            reject(error.message || 'An error occurred during the file upload');
        }
    }
}

export const EditorImageUploadAdapterPlugin = function (editor: Editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return new UploadAdapter(loader);
    };
};
