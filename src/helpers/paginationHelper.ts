import {
  IPaginationOptions,
  IPaginationOptionsResult,
} from '../interfaces/pagination';

const calculatePagination = (
  options: IPaginationOptions,
): IPaginationOptionsResult => {
  const page = Number(options?.page || 1);
  const limit = Number(options?.limit || 10);
  const skip = (page - 1) * limit;

  const sortBy = options?.sortBy || 'createdAt';
  const sortOrder = options?.sortOrder || 'desc';

  return {
    page: page,
    limit: limit,
    skip: skip,
    sortBy: sortBy,
    sortOrder: sortOrder,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
