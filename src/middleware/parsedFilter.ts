import { Request, Response, NextFunction } from 'express';

const parseFilters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { filters } = req.query;
    const mongooseFilter: Record<string, any> = {};

    if (filters) {
        try {
            const parsedFilters: [string, string, any][] = JSON.parse(filters as string);
            parsedFilters.forEach(([field, operator, value]) => {
                switch (operator) {
                    case 'eq':
                        mongooseFilter[field] = value;
                        break;
                    case 'ne':
                        mongooseFilter[field] = { $ne: value };
                        break;
                    case 'gt':
                        mongooseFilter[field] = { $gt: value };
                        break;
                    case 'lt':
                        mongooseFilter[field] = { $lt: value };
                        break;
                    case 'gte':
                        mongooseFilter[field] = { $gte: value };
                        break;
                    case 'lte':
                        mongooseFilter[field] = { $lte: value };
                        break;
                    case 'in':
                        mongooseFilter[field] = { $in: value };
                        break;
                    case 'nin':
                        mongooseFilter[field] = { $nin: value };
                        break;
                    case 'like':
                        mongooseFilter[field] = { $regex: value, $options: 'i' };
                        break;
                    default:
                        break;
                }
            });
            (req as any).mongooseFilter = mongooseFilter;
            next();
        } catch (error) {
            res.status(400).json({ message: 'Invalid filters format' });
        }
    } else {
        next();
    }
};

export default parseFilters;
