import { Injectable } from '@angular/core'; 

@Injectable() 

export class AzureConfigService { 

constructor() { 

    } 

public get getAdalConfig(): any { 

return { 

tenant: '85c997b9-f494-46b3-a11d-772983cf6f11', 

clientId: '412ca9af-9ed4-468f-8017-7fe2fe1ff54f', 

// redirectUri: https://starresidentz.com + '/', 

// postLogoutRedirectUri: https://starresidentz.com + '/' 

        }; 

    } 

} 