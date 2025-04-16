import img_camq from 'assets/image_products/check-id-sr/camera/1.webp'
import img_camw from 'assets/image_products/check-id-sr/camera/2.webp'
import img_came from 'assets/image_products/check-id-sr/camera/3.webp'
import img_camr from 'assets/image_products/check-id-sr/camera/4.webp'
// Thiết bị không camera
import img_nocam from 'assets/image_products/check-id-sr/un_camera/12.webp'
import img_nocamq from 'assets/image_products/check-id-sr/un_camera/13.webp'
import img_nocamw from 'assets/image_products/check-id-sr/un_camera/14.webp'
import img_nocame from 'assets/image_products/check-id-sr/un_camera/15.webp'
import img_nocamr from 'assets/image_products/check-id-sr/un_camera/16.webp'
// 2 thiết bị
import img_all from 'assets/image_products/check-id-sr/all/18.webp'
import img_allq from 'assets/image_products/check-id-sr/all/19.webp'
import img_allw from 'assets/image_products/check-id-sr/all/20.webp'

const SlideProductCam = [
  {slideContent: img_camq},
  {slideContent: img_camw},

  {slideContent: img_camr},

  {slideContent: img_came},
]
const SlideProductNoCam = [
  {slideContent: img_nocam},
  {slideContent: img_nocamq},
  {slideContent: img_nocamw},
  {slideContent: img_nocame},
  {slideContent: img_nocamr},
]
const SlideProduct = [{slideContent: img_all}, {slideContent: img_allw}, {slideContent: img_allq}]
export {SlideProductCam, SlideProductNoCam, SlideProduct}
