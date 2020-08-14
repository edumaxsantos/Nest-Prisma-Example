import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PrismaService } from 'src/prisma.service';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {
  constructor(private postService: PostService) {}
}
