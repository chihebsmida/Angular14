import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {MenubarModule} from 'primeng/menubar';
import {ProgressBarModule} from 'primeng/progressbar';
import {RatingModule} from 'primeng/rating';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {ListboxModule} from 'primeng/listbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CarouselModule} from 'primeng/carousel';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {InplaceModule} from 'primeng/inplace';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { PanelModule } from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';

// services
import {ConfirmationService, MessageService} from 'primeng/api';




@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    CalendarModule,
    CheckboxModule,
    TableModule,
    DialogModule,
    DropdownModule,
    TooltipModule,
    MessagesModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
    BreadcrumbModule,
    InputTextModule,
    InputNumberModule,
    ToggleButtonModule,
    MenubarModule,
    ProgressBarModule,
    RatingModule,
    PanelMenuModule,
    ToolbarModule,
    ListboxModule,
    RadioButtonModule,
    CarouselModule,
    TabViewModule,
    CardModule,
    AccordionModule,
    InplaceModule,
    InputSwitchModule,
    SelectButtonModule,
    MultiSelectModule,
    ConfirmPopupModule,
    PanelModule,
    SplitButtonModule,


  ],
  exports: [
    ButtonModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    TooltipModule,
    MessagesModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
    BreadcrumbModule,
    InputTextModule,
    InputNumberModule,
    ToggleButtonModule,
    MenubarModule,
    ProgressBarModule,
    RatingModule,
    PanelMenuModule,
    ToolbarModule,
    ListboxModule,
    RadioButtonModule,
    CarouselModule,
    TabViewModule,
    CardModule,
    AccordionModule,
    InplaceModule,
    InputSwitchModule,
    SelectButtonModule,
    MultiSelectModule,
    SplitButtonModule,
    
  ],
  providers:[  MessageService, ConfirmationService]
})
export class PrimengModule { }
