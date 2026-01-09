{% tabs package %}
{% tab package npm %}
```terminal
npm install {{ include.command }}
```
{% endtab %}
{% tab package Yarn %}
```terminal
yarn install {{ include.command }}
```
{% endtab %}
{% endtabs %}