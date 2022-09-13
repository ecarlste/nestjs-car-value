import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { User } from '../user.entity';
import { UsersService } from '../users.service';

export interface RequestWithUser extends Request {
  user?: User;
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(req: RequestWithUser, res: Response, next: NextFunction) {
    const { userId } = req.session || {};

    if (userId) {
      const user = await this.usersService.findOne(userId);

      req.user = user;
    }

    next();
  }
}
