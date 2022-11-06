import { ChatComponent } from './cmps/chat/chat.component';
import { ServerResolver } from './resolvers/server.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:':id',component:ChatComponent,resolve:{ServerResolver},canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
