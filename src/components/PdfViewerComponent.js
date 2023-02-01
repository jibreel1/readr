import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const PdfViewerComponent = ({ document }) => {
   const containerRef = useRef(null);

   useEffect(() => {
      const container = containerRef.current;
      let PSPDFKit;

      (async function () {
         PSPDFKit = await import("pspdfkit");

         let toolbarItems = PSPDFKit.defaultToolbarItems;
         // Add the `layout-config` toolbar item after the `pager` item.
         let pagerIndex = toolbarItems.findIndex(item => item.type === "pager");
         toolbarItems.splice(pagerIndex + 1, 0, { type: "layout-config" });

         PSPDFKit.load({
            initialViewState: new PSPDFKit.ViewState({
               readOnly: true,
               allowPrinting: false,
               allowExport: false,
               keepFirstSpreadAsSinglePage: true,
            }),
            // Container where PSPDFKit should be mounted.
            container,
            toolbarItems,
            // The document to open.
            document: document,
            // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
            baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
         });
      })();

      return () => PSPDFKit && PSPDFKit.unload(container);
   }, [document]);

   return (
      <Box
         ref={containerRef}
         sx={{ width: "100%", height: "600px" }}
         flex="2"
      />
   );
};

export default PdfViewerComponent;
