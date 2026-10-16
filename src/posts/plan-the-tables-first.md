---
title: Plan the tables first
tag: Laravel
icon: db
summary: How I would start a Laravel dashboard: entities, then migrations, then screens.
sample: false
---

Before building a management dashboard, list the things it tracks, such as students, classes and payments, and how they relate.

Then generate a model, migration and resource controller for each one:

```bash
php artisan make:model Student -mcr
```

Once the tables exist, the screens are mostly lists and forms on top of them, so the dashboard comes together faster.
