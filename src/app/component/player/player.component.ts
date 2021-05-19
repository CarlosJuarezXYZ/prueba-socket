import { AfterContentInit, Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, AfterContentInit {
  balance:number = 0;
  id:number=0;
  status:string="";
  //player:Object[] = [];
  constructor(private socket:SocketService) {
    
   }

   ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.reciveData();
  }

   reciveData(){
     this.socket.io.on("sendData",(dataPlayer:any)=>{
     console.log(dataPlayer);
    //  dataPlayer.id = this.id;
     this.id = dataPlayer.playerId;
     this.balance = dataPlayer.amount;
    //  dataPlayer.status = this.status;
    //  dataPlayer.balance = this.balance;
     })
   }
}
