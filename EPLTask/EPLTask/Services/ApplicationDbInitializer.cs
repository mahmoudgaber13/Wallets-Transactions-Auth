using EPLTask.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Services
{
    public class ApplicationDbInitializer
    {
        public static void SeedUsers(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            if (roleManager.FindByNameAsync("Admin").Result == null)
            {
                var role = new IdentityRole();
                role.Name = "Admin";
                roleManager.CreateAsync(role);
            }
            if (roleManager.FindByNameAsync("User").Result == null)
            {
                var role = new IdentityRole();
                role.Name = "User";
                roleManager.CreateAsync(role);
            }
            if (userManager.FindByEmailAsync("abc@xyz.com").Result == null)
            {
                ApplicationUser user = new ApplicationUser
                {
                    UserName = "Admin",
                    Email = "abc@xyz.com",
                    PhoneNumber = "01111111111"
                };

                IdentityResult result =  userManager.CreateAsync(user, "P@ssword").Result;

                if (result.Succeeded)
                {
                     userManager.AddToRoleAsync(user, "Admin");
                }
            }
        }
    }
}
