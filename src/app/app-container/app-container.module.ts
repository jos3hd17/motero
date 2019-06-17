import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppContainerPage } from './app-container.page';

const routes: Routes = [
  {
    path: 'container',
    component: AppContainerPage,
    children: [
      { path: 'feed', loadChildren: '../principal/social/feed/feed.module#FeedPageModule' },
      { path: 'follow', loadChildren: '../principal/social/follow/follow.module#FollowPageModule' },
      { path: 'post', loadChildren: '../principal/social/post/post.module#PostPageModule' },
      { path: 'mymoto', loadChildren: '../principal/moto/mymoto/mymoto.module#MymotoPageModule' },
      { path: 'list-item', loadChildren: '../generic/list-item/list-item.module#ListItemPageModule' },
      { path: 'detail-item', loadChildren: '../generic/detail-item/detail-item.module#DetailItemPageModule' },
      { path: 'motowear', loadChildren: '../principal/user/motowear/motowear.module#MotowearPageModule' },
      { path: 'notify', loadChildren: '../principal/social/notify/notify.module#NotifyPageModule' },
      { path: 'groups', loadChildren: '../principal/social/groups/groups.module#GroupsPageModule' },
      { path: 'profile', loadChildren: '../users/profile/profile.module#ProfilePageModule' }
    ]
  },
  {
    path: '',
    redirectTo: 'container/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppContainerPage]
})
export class AppContainerPageModule { }
