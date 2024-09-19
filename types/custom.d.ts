declare module 'ionicons' {
  export const IonIcon: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }
}