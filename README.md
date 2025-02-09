# EcoFarmingTracker
This project is a migrated version of the original [Eco Farming Tool](https://github.com/aritchie05/eco-farming-tool/). That project was a Java web app that used Spring Boot with Thymeleaf for UI rendering. I took that down because the hosting service I was using (Heroku) got rid of their free tier.
So I rewrote this using Angular 19, so I could host it for free using [Vercel](https://vercel.com) (shoutout to them, they are amazing).

## Usage

Add a field with the big plus button. Name it if you want. Select the crop you are planting. When you have planted the field in game, press the Plant button.
Now you will see the plant time, as well as the time to harvest at full maturity.

When you have harvested the field, click the Harvest button. This will clear the times for crops that don't automatically regrow. For crops that do regrow (like Huckleberries), clicking Harvest will recalculate the growth time and display a new harvest time.

Clicking Replant will calculate the new times assuming you dug up the entire field and replanted it. Do not do this for auto regrowing crops if you only harvested them, just click Harvest.

### Settings

Click the Settings cog icon in the top right. Change the Growth Time Multiplier if your server has modified plant growth times, and the values will automatically be reflected in the app. Note that plant/harvest times that are already saved will not be recalculated,
you will need to Replant or Harvest for that. This is intentional.

## Angular Details

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
