import { msg } from "@lit/localize";

export type Settings = Readonly<{
  api: Readonly<{ server: string }>;
  oauth: Readonly<{ server: string; clientId: string }>;
  apps: ReadonlyArray<Readonly<App>>;
  navigationHome: NavigationItem;
  navigationMyProfile: NavigationItem;
  navigationMySettings: NavigationItem;
  navigation: ReadonlyArray<NavigationGroup>;
}>;

export type App = Readonly<{ key: string; scope: string; root: string }>;

export type Navigation = ReadonlyArray<NavigationGroup>;

export type NavigationGroup = Readonly<{
  label: string;
  items: ReadonlyArray<NavigationItem>;
}>;

export type NavigationItem = Readonly<{
  key: string;
  label: string;

  /**
   * The navigation item will only be displayed if the user has any of
   * these roles or permissions. If `null`, the item is visible to all
   * users.
   */
  allowedRolesOrPermissions: ReadonlyArray<string> | null;

  /**
   * The navigation item will be hidden if on any of these
   * instances. If `null`, the item is visible on all instances.
   */
  deniedInstanceIds: ReadonlyArray<string> | null;

  appKey: string;
  appPath: string;
}>;

export const settings: Settings = {
  api: {
    server: "https://eventoapp-test.erz.be.ch/restApi",
  },
  oauth: {
    server: "https://eventoapp-test.erz.be.ch",
    clientId: "dev3000",
  },
  apps: [
    {
      key: "schulverwaltung",
      scope: "Tutoring",
      root: "apps/webapp-schulverwaltung/index.html",
    },
    {
      key: "anmeldedetailsEinlesen",
      scope: "NG",
      root: "apps/EmberApps/AnmeldedetailsEinlesen/index.html",
    },
    {
      key: "schulleiterPersonen",
      scope: "NG",
      root: "apps/EmberApps/SchulleiterPersonen/index.html",
    },
    {
      key: "kursausschreibung",
      scope: "Public",
      root: "apps/Kursausschreibung/index.html",
    },
    {
      key: "kursausschreibungIntern",
      scope: "Public",
      root: "apps/Kursausschreibung/indexIntern.html",
    },
    {
      key: "stellvertretung",
      scope: "Tutoring",
      root: "apps/Stellvertretung/index.html",
    },
    {
      key: "reservation",
      scope: "NG",
      root: "apps/Raumreservation/index.html",
    },
  ],
  navigationHome: {
    key: "home",
    label: "Home",
    allowedRolesOrPermissions: null,
    deniedInstanceIds: null,
    appKey: "schulverwaltung",
    appPath: "#/dashboard",
  },
  get navigationMyProfile() {
    return {
      key: "myProfile",
      label: msg("Mein Profil"),
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "schulverwaltung",
      appPath: "#/my-profile",
    };
  },
  get navigationMySettings() {
    return {
      key: "mySettings",
      label: msg("Einstellungen"),
      allowedRolesOrPermissions: null,
      deniedInstanceIds: null,
      appKey: "schulverwaltung",
      appPath: "#/my-settings",
    };
  },
  get navigation(): Navigation {
    return [
      {
        label: msg("Unterricht"),
        items: [
          {
            key: "presenceControl",
            label: msg("Präsenzkontrolle"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/presence-control",
          },
          {
            key: "currentEvents",
            label: msg("Aktuelle Fächer"),
            allowedRolesOrPermissions: ["TeacherRole", "ClassTeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/events",
            //appPath: "#/current-events", // TODO split event into current-events and tests
          },
          {
            key: "tests",
            label: msg("Tests und Bewertung"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/events",
            //appPath: "#/tests", // TODO split event into current-events and tests
          },
          {
            key: "substitutionsAssign",
            label: msg("Stellvertretung"),
            allowedRolesOrPermissions: ["TeacherRole"],
            deniedInstanceIds: null,
            appKey: "stellvertretung",
            appPath: "#/substitutions/assign",
          },
        ],
      },
      {
        label: msg("Absenzen"),
        items: [
          {
            key: "openAbsences",
            label: msg("Offene Absenzen entschuldigen"),
            allowedRolesOrPermissions: ["TeacherRole", "ClassTeacherRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/open-absences",
          },
          {
            key: "editAbsences",
            label: msg("Absenzen bearbeiten"),
            allowedRolesOrPermissions: [
              "TeacherRole",
              "ClassTeacherRole",
              "AbsenceAdministratorRole",
            ],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/edit-absences",
          },
          {
            key: "evaluateAbsences",
            label: msg("Absenzen auswerten"),
            allowedRolesOrPermissions: [
              "TeacherRole",
              "ClassTeacherRole",
              "AbsenceAdministratorRole",
            ],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/evaluate-absences",
          },
        ],
      },
      {
        label: msg("Angebote"),
        items: [
          {
            key: "coursesAndEvents",
            label: msg("Kurse und Veranstaltungen"),
            allowedRolesOrPermissions: null,
            deniedInstanceIds: null,
            appKey: "kursausschreibung",
            appPath: "#/",
          },
          {
            key: "internalTraining",
            label: msg("Schulinterne Weiterbildung"),
            allowedRolesOrPermissions: [
              "TeacherRole",
              "ClassTeacherRole",
              "AbsenceAdministratorRole",
              "SubstituteAdministratorRole",
            ],
            deniedInstanceIds: null,
            appKey: "kursausschreibungIntern",
            appPath: "#/",
          },
          {
            key: "reservations",
            label: msg("Räume und Geräte reservieren"),
            allowedRolesOrPermissions: ["Reservations"],
            deniedInstanceIds: null,
            appKey: "reservation",
            appPath: "#/",
          },
        ],
      },
      {
        label: msg("Aus-/Weiterbildungen"),
        items: [
          {
            key: "myAbsences",
            label: msg("Absenzen"),
            allowedRolesOrPermissions: ["StudentRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/my-absences",
          },
          {
            key: "myGrades",
            label: msg("Noten"),
            allowedRolesOrPermissions: ["StudentRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/my-grades",
          },
          {
            key: "schedule",
            label: msg("Stundenplan"),
            allowedRolesOrPermissions: ["StudentRole"],
            deniedInstanceIds: null,
            appKey: "schulverwaltung",
            appPath: "#/schedule", // TODO not implemented yet
          },
        ],
      },
      {
        label: msg("Administration"),
        items: [
          {
            key: "substitutionsAdmin",
            label: msg("Stellvertretungen administrieren"),
            allowedRolesOrPermissions: ["SubstituteAdministratorRole"],
            deniedInstanceIds: null,
            appKey: "stellvertretung",
            appPath: "#/substitutions/admin",
          },
          {
            key: "personSearch",
            label: "Personen und Institutionen suchen",
            allowedRolesOrPermissions: ["PersonRight"],
            deniedInstanceIds: null,
            appKey: "schulleiterPersonen",
            appPath: "#/persons",
          },
          {
            key: "eventRegistration",
            label: msg("Anmeldedetails einlesen"),
            allowedRolesOrPermissions: [
              "PersonRight",
              "RegistrationRightWeiterbildungModulanlass",
              "RegistrationRightWeiterbildungKurs",
            ],
            deniedInstanceIds: null,
            appKey: "anmeldedetailsEinlesen",
            appPath: "#/input/",
          },
        ],
      },
    ];
  },
};