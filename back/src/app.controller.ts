import {Controller, Get, HttpStatus, Res} from "@nestjs/common";
import {Response} from "express";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Portfolio Endpoint')
@Controller()
export class AppController {
    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'returns the home info of the api'
    })
    async get(
        @Res({passthrough: true}) res: Response,
    ) {
        res.status(HttpStatus.OK);
        return {
            "name": "Portfolio API",
            "version": require('../package.json').version,
            "doc": process.env.DOC_URL,
            "repo": process.env.REPO_URL
        }
    }
}