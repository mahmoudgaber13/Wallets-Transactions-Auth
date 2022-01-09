using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Models
{
    public class Transaction
    {
        public int Id { get; set; }

        [Required]
        public double Amount { get; set; }

        [Required]
        public string SenderMobile { get; set; }

        [Required]
        public string RecieverMobile { get; set; }
    }
}
