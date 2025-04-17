import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const result = await commentService.create(
            req.query.modelId,
            req.query.modelType,
            req.body.userId,
            req.body.content
        );
        return res.status(201).json({
            success: true,
            message: 'Successfully created the comment',
            data: result,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong in comment controller',
            data: {},
            err: error
        });
    }
};
