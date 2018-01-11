import {Injectable} from '@angular/core';

declare var $: any;

@Injectable()

export class UtilsService {

    showNotification(type, message) {
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: type,
            timer: 2000,
            placement: {
                from: 'bottom',
                align: 'right'
            }
        });
    }

    openModal(modalName) {
        let modal = '#' + modalName;
        $(modal).modal('show');
    }

    closeModal(modalName) {
        let modal = '#' + modalName;
        $(modal).modal('hide');
    }
}