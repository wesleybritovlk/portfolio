import { Module } from "@nestjs/common";
import { FormModule } from "./form/form.module";
import { ConfigModule } from "@nestjs/config";
import { ContentModule } from "./content/content.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FormModule,
    ContentModule],
  controllers: [],
  providers: []
})
export class AppModule {
}
