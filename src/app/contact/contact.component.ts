import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  isEmpty!: boolean;

  inputFields = [
    {
      type: 'text',
      name: 'floating_Name',
      id: 'floating_Name',
      placeholder: 'user Name',
      label: 'user Name',
      isEmpty: true,
    },
    {
      type: 'number',
      name: 'floating_Age',
      id: 'floating_Age',
      placeholder: 'user Age',
      label: 'user Age',
      isEmpty: true,
    },
    {
      type: 'email',
      name: 'floating_email',
      id: 'floating_email',
      placeholder: 'user Email',
      label: 'user Email',
      isEmpty: true,
    },
    {
      type: 'password',
      name: 'floating_Password',
      id: 'floating_Password',
      placeholder: 'user Password',
      label: 'user Password',
      isEmpty: true,
    },
  ];

  checkInput(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputFields[index].isEmpty = inputElement.value.length === 0;
  }
}
