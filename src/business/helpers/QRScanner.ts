import QrScanner from 'qr-scanner';

export class QRScanner {
  public scanImage(imageOrFileOrUrl: HTMLCanvasElement | HTMLVideoElement | ImageBitmap | HTMLImageElement | File | URL | String){
    QrScanner.scanImage(imageOrFileOrUrl)
      .then((result) => {
        return result
      })
      .catch((error) => {
        return error || 'No QR code found.'
      })
  }
}
