import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard as Guard, IAuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '@/api/user/user.entity';

@Injectable()
export class JwtAuthGuard extends Guard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: User): any {
    console.log("auth guard1");
    console.log(user);
    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log("auth guard2");
    await super.canActivate(context);

    const { user }: Request = context.switchToHttp().getRequest();
    console.log(user);
    return user ? true : false;
  }
}