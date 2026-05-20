import { invoiceNumber } from "./modules/invoiceNumber.js";
import { invoiceDetails } from "./modules/invoiceDetails.js";
import { billTo } from "./modules/billTo.js";
import { addItem, closeItem } from "./modules/addItem.js";
import { callAppendRow } from "./modules/getItemData.js";
import { toggleState } from "./modules/toggleTableState.js";

invoiceDetails()
billTo()
addItem()
closeItem()
callAppendRow()
toggleState()

