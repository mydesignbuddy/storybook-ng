import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AutocompleteComponent } from './forms/autocomplete/autocomplete.component';
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { DatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormfieldComponent } from './forms/formfield/formfield.component';
import { InputComponent } from './forms/input/input.component';
import { RadioComponent } from './forms/radio/radio.component';
import { SelectComponent } from './forms/select/select.component';
import { SliderComponent } from './forms/slider/slider.component';
import { SlidetoggleComponent } from './forms/slidetoggle/slidetoggle.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './buttons-indicators/button/button.component';
import { BottonToggleComponent } from './buttons-indicators/botton-toggle/botton-toggle.component';
import { BadgeComponent } from './buttons-indicators/badge/badge.component';
import { ChipsComponent } from './buttons-indicators/chips/chips.component';
import { IconComponent } from './buttons-indicators/icon/icon.component';
import { ProgressSpinnerComponent } from './buttons-indicators/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './buttons-indicators/progress-bar/progress-bar.component';
import { RipplesComponent } from './buttons-indicators/ripples/ripples.component';
import { PaginatorComponent } from './data-table/paginator/paginator.component';
import { SortHeaderComponent } from './data-table/sort-header/sort-header.component';
import { TableComponent } from './data-table/table/table.component';
import { CardComponent } from './layout/card/card.component';
import { DividerComponent } from './layout/divider/divider.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from './layout/grid-list/grid-list.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { ListComponent } from './layout/list/list.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { TreeComponent } from './layout/tree/tree.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { ButtonSheetComponent } from './popups-modals/button-sheet/button-sheet.component';
import { DialogComponent } from './popups-modals/dialog/dialog.component';
import { SnackbarComponent } from './popups-modals/snackbar/snackbar.component';
import { TooltipComponent } from './popups-modals/tooltip/tooltip.component';
import { MaterialtypographyComponent } from './typography/materialtypography/materialtypography.component';
import { ColorsComponent } from './typography/colors/colors.component';
import { ChipinputComponent } from './buttons-indicators/chips/chipinput/chipinput.component';
import { BasicExpansionComponent } from './layout/expansion-panel/basic-expansion/basic-expansion.component';
import { AccordionComponent } from './layout/expansion-panel/accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlidetoggleComponent,
    TypographyComponent,
    ButtonComponent,
    BottonToggleComponent,
    BadgeComponent,
    ChipsComponent,
    IconComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    RipplesComponent,
    PaginatorComponent,
    SortHeaderComponent,
    TableComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    StepperComponent,
    ListComponent,
    TabsComponent,
    TreeComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    ButtonSheetComponent,
    DialogComponent,
    SnackbarComponent,
    TooltipComponent,
    MaterialtypographyComponent,
    ColorsComponent,
    ChipinputComponent,
    BasicExpansionComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
