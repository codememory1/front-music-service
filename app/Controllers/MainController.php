<?php

namespace App\Controllers;

use Codememory\Components\Translator\Translation;
use Kernel\Controller\AbstractController;

/**
 * Class MainController
 *
 * @package App\Controllers
 *
 * @author  Codememory
 */
class MainController extends AbstractController
{

    /**
     * @return void
     */
    public function web(): void
    {

        /** @var Translation $translation */
        $translation = $this->get('translator');

        $this->render('index', [
            'parameters' => [
                'active_lang'     => $translation->language->getActiveLang(),
                'app_name'        => env('app.name'),
                'app_title'       => env('app.title'),
                'app_description' => env('app.description'),
                'app_url'         => env('app.full-url'),
                'app_package'     => env('app.package')
            ]
        ]);

    }

}