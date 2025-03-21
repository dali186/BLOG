import { render, screen, fireEvent } from '@testing-library/react';

describe('CreateArticle', () => {
    it('제목, 내용, 카테고리, ?태그를 입력하고 제출 시 API를 호출', async () => {
        const mockFetch = jest.fn().mockResolvedValue({ ok: true });
        global.fetch = mockFetch;

        render(<CreateArticle />);

        // Input field 확인
        const titleInput = screen.getByPlaceholderText('제목을 입력하세요');
        const contentInput = screen.getByPlaceholderText('내용을 입력하세요');
        const categoryInput = screen.getByPlaceholderText('카테고리를 선택하세요');
        const submitButton = screen.getByText('게시글 등록');

        // Input value 확인
        fireEvent.change(titleInput, { target: { value: '테스트 제목' } });
        fireEvent.change(contentInput, { target: { value: '테스트 내용' } });

        // Submit
        fireEvent.click(submitButton);

        // API 호출 확인
        expect(mockFetch).toHaveBeenCalledWith(
            '/api/articles/write',
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({ title: '테스트 제목', content: '테스트 내용', category: '테스트 카테고리', tags: [] }),
            })
        );
    });
});