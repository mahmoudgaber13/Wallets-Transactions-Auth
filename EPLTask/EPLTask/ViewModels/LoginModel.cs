using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.ViewModels
{
    public class LoginModel
    {
        [Required]
        [MaxLength(11)]
        [MinLength(11)]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Phone must be numeric")]
        public string Mobile { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
