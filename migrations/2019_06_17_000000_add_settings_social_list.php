<?php

use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $settings = app('flarum.settings');

        if ($value = $settings->get($key = 'avatar4eg.share-social.list')) {
            $json = json_decode($value);

            if ($json != null) {
                foreach ($json as $network) {
                    $network = strtolower($network);

                    if ($network == 'google_plus') continue;

                    $settings->set("fof-share-social.networks.$network", true);
                }
            }

            $settings->delete($key);
        }
    },
    'down' => function () {
        // do nothing
    }
];