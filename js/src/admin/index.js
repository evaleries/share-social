import { settings } from '@fof-components';
const {
    SettingsModal,
    items: { BooleanItem },
} = settings;

const networks = [
    ['facebook', 'twitter', 'linkedin', 'reddit'],
    ['whatsapp', 'telegram'],
    ['vkontakte', 'odnoklassniki', 'my_mail'],
    ['qq', 'qzone'],
];

app.initializers.add('fof/share-social', () => {
    app.extensionSettings['fof-share-social'] = () =>
        app.modal.show(
            SettingsModal, {
                title: app.translator.trans('fof-share-social.admin.settings.title'),
                className: 'FofShareSocialSettingsModal',
                size: 'small',
                items: s=> [
                    ...networks.map(networks =>
                        networks.map(network => (
                            <BooleanItem setting={s} name={`fof-share-social.networks.${network}`}>
                                {app.translator.trans(`fof-share-social.lib.networks.${network}`)}
                            </BooleanItem>
                        ))
                    ),
                ],
            }
        );
});
