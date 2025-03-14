<?php

namespace App\Filament\Resources\ProductPlusPointResource\Pages;

use App\Filament\Resources\ProductPlusPointResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProductPlusPoints extends ListRecords
{
    protected static string $resource = ProductPlusPointResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
