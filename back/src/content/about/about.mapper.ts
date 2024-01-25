import { About, Skill } from './about';
import { AboutRequest, AboutResponse, SkillRequest, SkillResponse } from './about.dto';

export class AboutMapper {
  toModel = (request: AboutRequest): About =>
    new About(
      request.desc_en,
      request.desc_pt,
      [],
    );

  toModelUpdate = (model: About, request: AboutRequest): About =>
    new About(
      request.desc_en,
      request.desc_pt,
      model.skillls,
    );

  toResponse = (model: About): AboutResponse =>
    model ? new AboutResponse(
      model.descEN,
      model.descPT,
      model.skillls ? model.skillls.map(this.toResponseSkill) : [],
    ) : undefined;

  toModelSkill = (request: SkillRequest): Skill =>
    new Skill(
      undefined,
      request.tech_name,
      request.alt_en,
      request.alt_pt,
    );

  toModelUpdateSkill = (model: Skill, request: SkillRequest): Skill =>
    new Skill(
      model.id,
      request.tech_name,
      request.alt_en,
      request.alt_pt,
      model.createdAt,
    );

  toResponseSkill = (model: Skill): SkillResponse =>
    model ? new SkillResponse(
      model.id,
      model.techName,
      model.altEN,
      model.altPT,
    ) : undefined;
}
