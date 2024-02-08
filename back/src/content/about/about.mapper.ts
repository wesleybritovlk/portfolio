import { CommonMapper } from '../../common/common.mapper';
import { About } from './about';
import { AboutRequest, AboutResponse } from './about.dto';
import { SkillResponse } from './skill/skill.dto';

export class AboutMapper
  implements CommonMapper<About, AboutRequest, AboutResponse> {
  toModel(request: AboutRequest): About {
    let about = new About();
    about.descEN = request.desc_en;
    about.descPT = request.desc_pt;
    return about;
  }

  toResponse(model: About): AboutResponse {
    let response = new AboutResponse();
    response.id = model.id;
    response.desc_en = model.descEN;
    response.desc_pt = model.descPT;
    response.skills = model.skills.map(skill => {
      let skillResponse = new SkillResponse();
      skillResponse.id = skill.id;
      skillResponse.tech_name = skill.techName;
      skillResponse.alt_en = skill.altEN;
      skillResponse.alt_pt = skill.altPT;
      return skillResponse;
    });
    return response;
  }
}
