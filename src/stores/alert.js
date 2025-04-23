import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: 'error', // success, error, info, warning
    text: 'Teste',
    icon: 'mdi-alert-circle',
  }),
  actions: {
    notifyAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    },
    notifyAlertCreated() {
      this.type = 'success';
      this.text = 'Task created Success!!!';
      this.icon = 'mdi-check-circle';
      this.notifyAlert();
    },
    notifyAlertDeleted() {
      this.type = 'warning';
      this.text = 'Task Deleted!!!';
      this.icon = 'mdi-delete';
      this.notifyAlert();
    },
    notifyAlertUpdated() {
      this.type = 'info';
      this.text = 'Task Updated!!!';
      this.icon = 'mdi-pencil';
      this.notifyAlert();
    },
  },
})
