<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductPlusPointResource\Pages;
use App\Filament\Resources\ProductPlusPointResource\RelationManagers;
use App\Models\Product;
use App\Models\ProductPlusPoint;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductPlusPointResource extends Resource
{
    protected static ?string $model = ProductPlusPoint::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // TextInput::make('product_id')
                //     ->label('Product ID')
                //     ->required()
                //     ->placeholder('Enter the product ID')
                //     ->autofocus(),
                // Select::make('product_id')
                //     ->label('Product ID')
                //     ->required()
                //     ->placeholder('Select the product ID')
                //     ->options(
                //         Product::all()->pluck('name', 'id')
                //     ),

                Select::make('product_id')
                    ->relationship('product', 'name')
                    ->label('Product')
                    ->required(),

                TextInput::make('point')
                    ->label('Point')
                    ->required()
                    ->placeholder('Enter the product point'),

                TextInput::make('pos')
                    ->label('Position')
                    ->required()
                    ->placeholder('Enter the product position'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('product.name')
                    ->label('Product')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('point')
                    ->label('Point')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('pos')
                    ->label('Position')
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([

            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProductPlusPoints::route('/'),
            'create' => Pages\CreateProductPlusPoint::route('/create'),
            'edit' => Pages\EditProductPlusPoint::route('/{record}/edit'),
        ];
    }
}
