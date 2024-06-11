Я постарался по максимуму исправить все те глобальные косяки, которые были на ломбардах.
Надеюсь, что у меня получилось и мы продолжим сотрудничество. Я хочу быть с Юспектом, помогать расти и развиваться вместе с ним.
Коллега так же подметил, что стало явно лучше, чем было.
Безусловно, может быть адаптив не такой красивый, как хотелось бы, моментами было тяжело вытягивать блоки в сосиску.

Запуск: yarn dev

БЫЛО ==> СТАЛО

1. Много h1, p и лишних тегов, использованных не по семантике. ==> ЕДИНСТВЕННЫЙ H1. Теги старался использовать по смыслу. Списки сделаны списками, абзацы - параграфами, ссылки - ссылками и тд.

2. Многие ссылки сделаны параграфами ==> Все ссылки сделаны через тег <a> и имеют свои аттрибуты, например target="\_blank" и href="tel:".

3. Обращение по тегам в CSS ==> Обращение только по классам. (за исключением некоторых инлайн элементов)

4. Куча бесполезных блоков, без которых можно обойтись. Не правильная разбивка по смысловым блокам. ==> Старался разделить блоки по смыслу, считаю, что у меня получилось.

5. Текста не оттипографированы ==> Все текста прогнаны через типограф.

6. Много тегов без классов ==> Почти все теги имеют класс.

7. Неправильные названия у классов. ==> Названия классов старался делать по смыслу, приближенному к БЭМу.

8. Не уделял внимания картинкам (аттрибуту alt и srcset) ==> Все картинки имеют аттрибут alt и srcset - выгружены в друх разрешениях.

9. Использовал только пиксели. ==> Использую гибкие единицы измерения: rem и %.

10. Цвета задавал так, как они есть в фигме. Не используя css переменные. ==> Использую css переменные.

11. Вообще не пользовался гридами. ==> Все сетки сделаны гридами.

12. Формы не валидированы. ==> Все формы валидированы.

13. Медиа запросы разбросаны непонятно как ==> Медиа запросы расположены строго под нужными классами.

14. HTML и CSS Валидатор? Что это? ==> Разметка прошла через HTML и CSS валидаторы.

15. Картинки весили миллион мб ==> все картинки сжаты и весят очень мало.

P.S. Лого по сути свг, но из-за большого кода, я вставил картинкой.
Чисто ради демонстрации главного. Понятное дело, что в прод варианте я вставлю SVG.
Ошибки в консоли падают от iframe.
