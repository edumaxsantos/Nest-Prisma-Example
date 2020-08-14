import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';
import {Post as PostModel} from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  async getPostById(@Param('id', new ParseIntPipe()) id: number): Promise<PostModel> {
    return this.postService.post({id});
  }

  @Get()
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: {published: true},
    });
  }

  @Get('filtered/:searchString')
  async getFilteredPosts(@Param('searchString') searchString: string): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post()
  async createDraft(@Body() postData: {title: string; content?: string; authorEmail: string}): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      User: {
        connect: {email: authorEmail},
      },
    });
  }

  @Put(':id')
  async publishPost(@Param('id', new ParseIntPipe()) id: number): Promise<PostModel> {
    return this.postService.updatePost({
      where: {id},
      data: {published: true},
    });
  }

  @Delete(':id')
  async deletePost(@Param('id', new ParseIntPipe()) id: number): Promise<PostModel> {
    return this.postService.deletePost({id});
  }

}