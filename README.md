# APLIKACJA TESTOWA

## Development

```
pnpm dev
```

## CHARAKTERYSTYKA KODU
* aplikacja utworzone poprzez Vite (podczas live-reload'u przeładowywane są tylko te moduły, które są w użycie w przeciwieństwie do Webpack'a, który odświeża całe drzewo dependencji)
* aplikacja podzielona na backend(logika) i frontend(wyglad) - inspiracja twórcą Redux'a Andrew Clark'a, który utworzył store'a ponieważ dzielił aplikacje reactowe na frontend i backend. 
* komponenty podzielone na base(logika) i widok(wyglad)
* konstrukcja formularzy wg. mojego projektu PPI (Props per Input - propsy i ich nomenklatura odpowiadaja nazwie Input'ów w formularzu co poprawia widoczność, i stanowi wzorzez poprawnego przekazywania props'ów )
* hooki, routy, locale i wszystko zwiazane z logiką w katalogu backend
* style, strony, componenty i assets w katalogu frontend
* Framework'i wykorzystane do stylowania to Chakra UI (komponenty, responsywność, inputy) oraz Tailwind CSS - utility classes
* hooki wykorzystane w projekcie mojego autorstwa: useProduce, useTranslation, useValidation 
* Formularze wykorzystują framework react-hook-form
* Testowanie odbywa się przy pomocy nowoczesnego narzędzia vitest