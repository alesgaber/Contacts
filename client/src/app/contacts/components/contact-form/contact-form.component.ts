import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Contact } from '../../models/contact.mode';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  @Input() saving = false;
  @Output() add: EventEmitter<Contact> = new EventEmitter<Contact>();

  GENDER_DEFAULT = 'male';

  form = this.fb.group({
    name: ['', [Validators.required]],
    gender: [this.GENDER_DEFAULT, [Validators.required]],
    email: ['', [Validators.email]],
    telephone: ['', [Validators.pattern('[- +()0-9]+')]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSave() {
    if (this.form.valid) {
      const contact: Contact = { ...this.form.value };
      this.add.emit(contact);
      this.resetForm();
    }
  }

  resetForm() {
    this.form.reset();
    this.genderControl.setValue(this.GENDER_DEFAULT);
  }

  getSaveButtonText(): string {
    return this.saving ? 'Saving' : 'Save';
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get genderControl(): FormControl {
    return this.form.get('gender') as FormControl;
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get telephoneControl(): FormControl {
    return this.form.get('telephone') as FormControl;
  }
}
