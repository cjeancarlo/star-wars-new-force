export class ShipBase64 {
    encode(s: string) {
      return window.btoa(s);
    }

    decode(s: string) {
      return window.atob(s);
    }
  }
