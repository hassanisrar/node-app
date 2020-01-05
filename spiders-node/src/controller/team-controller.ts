import { TeamService } from "../service/team-service";

export
class TeamsController{
ser = new TeamService();
name = this.ser.team;
score = this.ser.score;
}