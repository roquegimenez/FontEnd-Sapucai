using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace miBilletera.Models
{
    public class tokenModels
    {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ID_token { get; set; }
    public int tiempodevencimiento { get; set; }

    }
}