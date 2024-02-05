import { CommonMapper } from '../../../common/common.mapper';
import { Skill } from './skill';
import { SkillRequest, SkillResponse } from './skill.dto';
import { About } from '../about';

export class SkillMapper
  implements CommonMapper<Skill, SkillRequest, SkillResponse> {
  toModel(request: SkillRequest, parentId?: string): Skill {
    let skill = new Skill();
    skill.techName = request.tech_name;
    skill.altEN = request.alt_en;
    skill.altPT = request.alt_pt;
    let about = new About();
    about.id = parentId;
    skill.about = about;
    return skill;
  }

  toResponse(model: Skill): SkillResponse {
    let response = new SkillResponse();
    response.id = model.id;
    response.tech_name = model.techName;
    response.alt_en = model.altEN;
    response.alt_pt = model.altPT;
    return response;
  }
}
