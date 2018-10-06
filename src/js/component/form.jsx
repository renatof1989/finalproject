import React from 'react';

function Form() {
    return(
        <form className="col-6">
            <div class="form-row">
                <div class="col-md-6 mb-3 p-1">
                    <label for="validationServer01">First name</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="First name" required/>
                    <div class="valid-feedback">
              Looks good!
                    </div>
                </div>
                <div class="col-md-6 mb-3 p-1">
                    <label for="validationServer02">Last name</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Last name" required/>
                    <div class="valid-feedback">
                      Looks good!
                </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="validationServerUsername">Username</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend3">@</span>
                        </div>
                        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
                        <div class="invalid-feedback">
                    Please type in a username.
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="validationServer01">Address1</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Address1" required/>
                    <div class="valid-feedback">
                      Looks good!
                </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="validationServer01">Address2</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Address2" required/>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Country</label>
                    <select id="inputState" class="form-control">
                        <option selected>Country</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">
              Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationServer04">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>State</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationServer05">Zip</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required/>
                    <div class="invalid-feedback">
                    </div>
                </div>
            </div>
            <hr className="my-4"/>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                    <label class="form-check-label" for="invalidCheck3">
              Shipping address is the same as my billing address.
                    </label>
                    <div class="invalid-feedback">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                    <label class="form-check-label"  for="invalidCheck3">
                      Save this information for next time
                    </label>
                    <div class="invalid-feedback">
                    </div>
                </div>
            </div>
            <hr className="my-4"/>
        
            <h5> Payment </h5>
        
            <div class="form-check mt-4">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label class="form-check-label" for="exampleRadios1">
                  Credit Card
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label class="form-check-label" for="exampleRadios2">
                  Debit Card
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label class="form-check-label" for="exampleRadios2">
                  Pay Pal
                </label>
            </div>
      
      
            <div class="form-row">
                <div class="col-md-6 mb-3 mt-4 p-1">
                    <label for="validationServer01">Name on Card</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Name on Card" required/>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                </div>
                <div class="col-md-6 mb-3 mt-4 p-1">
                    <label for="validationServer02">Credit Card Number</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Credit Card Number" required/>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                </div>
            </div> 
        
            <div class="form-row">
                <div class="col-md-3 mb-3 mt-4 p-1">
                    <label for="validationServer01">Expiration</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="EXP" required/>
                    <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-3 mb-3 mt-4 p-1">
                    <label for="validationServer02">Cvv</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Security code" required/>
                    <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
            </div> 
        
            <hr className="my-4"/>
        
            <button class="btn btn-primary col-md-12 mb-3 mt-4" type="submit">Continue to checkout</button>
        </form>
                
                 
                 
                
      );
                
}
                 
     
 
 
 
 
 
 
 export default Form;