import { useEffect } from 'react'

export default function InquiryFormPopup() {
  useEffect(() => {
    const scriptSrc = 'https://scale.verpexxsystems.dev/js/form_embed.js'
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return

    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <iframe
      src="https://scale.verpexxsystems.dev/widget/form/1QFEe9dxuNsZNhPzhY1o"
      id="popup-1QFEe9dxuNsZNhPzhY1o"
      title="Inquiry Form Page"
      style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
      data-layout="{'id':'POPUP'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="deactivateAfter"
      data-deactivation-value="2"
      data-form-name="Inquiry Form Page"
      data-height="790"
      data-layout-iframe-id="popup-1QFEe9dxuNsZNhPzhY1o"
      data-form-id="1QFEe9dxuNsZNhPzhY1o"
    />
  )
}
