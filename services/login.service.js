import axios from "axios";

export class LoginUser{

 async login(user,pass){

    var userid = '603a4f7d1a8da20cad5b733a';
    var result = await axios.get(`http://localhost:5000/user/${userid}`);
    return result.data;
  }
}
