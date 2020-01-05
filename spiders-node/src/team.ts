import 'source-map-support/register';
import { TeamsController } from './controller/team-controller';

export const ctcl: any = async (event, _context) => {
  let teamCont = new TeamsController();
  console.log(event);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: teamCont.name,
      score: teamCont.score,
    }, null, 2),
  };
}