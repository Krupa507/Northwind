// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




function validateForm() {
    /*@*#################################################################################### * @
        @*##########################    JavaScrip Form Validation    ########################### * @
            @*###################################################################################### * @
                @* Logan Krupa * @*/


    //############################ Get Products #################################
    //Logan Krupa
    if (document.forms["Form"]["aProductName"].value == "") {
        alert("Name must be filled out");
        return false;
    }

    if (document.forms["Form"]["aQuantityPerUnit"].value == "") {
        alert("QuantityPerUnit must be filled out");
        return false;
    }
    if (document.forms["Form"]["aUnitPrice"].value == "") {
        alert("UnitPrice must be filled out");
        return false;
    }
    if (document.forms["Form"]["aUnitsInStock"].value == "") {
        alert("UnitsInStock must be filled out");
        return false;
    }
    if (document.forms["Form"]["aUnitsOnOrder"].value == "") {
        alert("UnitsOnOrder must be filled out");
        return false;
    }
    if (document.forms["Form"]["aReorderLevel"].value == "") {
        alert("ReorderLevel must be filled out");
        return false;
    }
    if (document.forms["Form"]["aDiscontinued"].value == "") {
        alert("Discontinued must be filled out");
        return false;
    }

    //############################ Get Categories #################################
    //Logan Krupa
    if (document.forms["Form"]["aCategoryId"].value == "") {
        alert("Name must be filled out");
        return false;
    }

    if (document.forms["Form"]["aCategoryName"].value == "") {
        alert("QuantityPerUnit must be filled out");
        return false;
    }
    if (document.forms["Form"]["aDescription"].value == "") {
        alert("UnitPrice must be filled out");
        return false;
    }


    //############################ Get Shipper #################################
    //Logan Krupa

    if (document.forms["Form"]["aCompanyName"].value == "") {
        alert("CompanyName must be filled out");
        return false;
    }
    if (document.forms["Form"]["aPhone"].value == "") {
        alert("Phone must be filled out");
        return false;
    }
}
    //############################ Get Orders #################################
    //Logan Krupa
    function validateOrdersForm() {

        
        if (document.forms["Form"]["aOrderDate"].value == "") {
            alert("OrderDate must be filled out");
            return false;
        }
        if (document.forms["Form"]["aRequiredDate"].value == "") {
            alert("RequiredDate must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShippedDate"].value == "") {
            alert("ShippedDate must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipVia"].value == "") {
            alert("ShipVia must be filled out");
            return false;
        }
        if (document.forms["Form"]["aFreight"].value == "") {
            alert("Freight must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipName"].value == "") {
            alert("ShipName must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipAddress"].value == "") {
            alert("ShipAddress must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipCity"].value == "") {
            alert("ShipCity must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipRegion"].value == "") {
            alert("ShipRegion must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipPostalCode"].value == "") {
            alert("ShipPostalCode must be filled out");
            return false;
        }
        if (document.forms["Form"]["aShipCountry"].value == "") {
            alert("ShipCountry must be filled out");
            return false;
        }

    }

    //############################ Get Orders #################################
    //Logan Krupa


    //############################ Get Orders #################################
    //Logan Krupa


    //############################ Get Orders #################################
    //Logan Krupa


    //############################ Get Orders #################################
    //Logan Krupa


    //############################ Get Orders #################################
    //Logan Krupa


    //############################ Get Orders #################################
    //Logan Krupa

}
