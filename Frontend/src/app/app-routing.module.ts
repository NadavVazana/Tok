import { ChatComponent } from './cmps/chat/chat.component';
import { ServerResolver } from './resolvers/server.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:':id',component:ChatComponent,resolve:{ServerResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
