# CloudThing React Developer Code Challenge


### View Completed Challenge Online
https://codesandbox.io/s/github/DisasterMan78/cloudthing-react-test

### Github Repo
https://github.com/DisasterMan78/cloudthing-react-test

## Instructions

Using [this design](https://www.figma.com/file/L7u0enlOxKXZuYtDRGjnXI/React-Developer-Challenge-Spec?node-id=0%3A1), and a fork of [this repo](https://codesandbox.io/s/admiring-agnesi-gybk2?fontsize=14&hidenavigation=1&theme=dark) create a small react app which does the following:

- Render a logo, email input, password input, and submit button
- Display generic validation error messages:
  - invalid email address
  - password is fewer than 8 characters
- Match the designs as closely as possible
- Responsively render for mobile and tablet/desktop
- Use styled-components or emotion for any component styling
- Follow accessibility best-practices

### Notes

* Utilises `useForm` hook based on https://codesandbox.io/s/o766kp4z05

* Behaviour on very small (<360px) screens is odd in current Chrome (v78.0) - this appears to be a browser bug, but something of an edge case

* Sizes are rationalised to whole multiples or sensible fractions of REM values. As a result, the layouts are not pixel perfect to the suplied flat artwork, but are better suited to use in a coherent design system. Refer to visual diffs below.

https://github.com/DisasterMan78/cloudthing-react-test/blob/master/visual-diffs/diff-mobile.png

https://github.com/DisasterMan78/cloudthing-react-test/blob/master/visual-diffs/diff-desktop.png

### Accessibility

Images:

* SVG has accessible \<title> tag

Forms:

Key methods as per https://www.w3.org/WAI/tutorials/forms/

* Labeling Controls: All inputs labelled

* Grouping Controls: Not required for simple form

* Form Instructions: Visually hidden but screen-readable input requirements provided

* Validating Input: Inputes are validated

* User Notifications: Submission functionality not added, notifications not required

* Multi-Page Forms: Not required for simple form

* Custom Controls: Not required for simple form